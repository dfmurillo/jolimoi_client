<template>
  <div class="container-fluid" id="decimal-to-roman">
    <div class="row">
      <form
        class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-5"
        v-on:submit.prevent
      >
        <div class="form-group">
          <label for="digit">Decimal number</label>
          <input
            type="number"
            class="form-control"
            id="digit"
            aria-describedby="digitHelp"
            ref="rawDecimal"
            @keyup="ConvertDecimalToRoman"
          />
          <small id="digitHelp" class="form-text text-muted">
            Please enter the digit you want to convert to Roman with.
          </small>
        </div>
        <!-- <button type="submit" class="btn btn-primary">Convert!</button> -->
      </form>
    </div>

    <DisplayNumber
      title="Converted Number"
      :number="romanNumber"
      id="conversionRomanNumber"
      v-if="romanNumber"
    ></DisplayNumber>

    <DisplayNumber
      title="Event Source Number"
      :number="romanNumberEvent"
      id="numberEmitedEvent"
      v-if="romanNumberEvent"
    ></DisplayNumber>
  </div>
</template>

<script>
import DisplayNumber from "./DisplayNumber";
import NumberConverter from "../libraries/NumberConverter";
import { converterApi, baseURL } from "../apis/converter";
const numberConverter = new NumberConverter();
export default {
  components: { DisplayNumber },

  data() {
    return {
      romanNumber: null,
      romanNumberEvent: null,
      eventSource: null
    };
  },

  mounted() {
    if (typeof EventSource !== "undefined") {
      this.eventSource = new EventSource(`${baseURL}/events`);
      this.eventSource.onmessage = ({ data }) => {
        this.romanNumberEvent = JSON.parse(data);
      };
    }
  },

  methods: {
    /**
     * Function that takes the $refs.rawDecimal value and convert it to Roman
     * @param event
     */
    async ConvertDecimalToRoman(event) {
      //check if the entered value is a number
      if (event) {
        //TODO: if is necesary abstract this in a helper file
        const char = String.fromCharCode(event.keyCode);
        if (!/[0-9]/.test(char) && event.keyCode != 8) {
          //only numbers and delete are valid
          event.preventDefault();
          return false;
        }
      }

      if (this.$parent.$refs.requestType.checked) {
        //solve the conversion with an ajax request to Node
        const { data } = await converterApi.get(
          `/convert/toRoman/${this.$refs.rawDecimal.value}`
        );
        this.romanNumber = data.roman;
      } else {
        //use the front converter
        this.romanNumber = numberConverter.convertDecimalToRoman(
          this.$refs.rawDecimal.value
        );
      }
    }
  },

  beforeDestroy() {
    if (typeof EventSource !== "undefined") {
      this.eventSource.close();
    }
  }
};
</script>
