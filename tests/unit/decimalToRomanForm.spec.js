import { shallowMount } from "@vue/test-utils";
import DecimalToRomanForm from "@/components/DecimalToRomanForm.vue";

describe("DecimalToRomanForm.vue", () => {
  let component;

  beforeEach(() => {
    component = shallowMount(DecimalToRomanForm);
  });

  it("has the expected html structure", () => {
    expect(component.element).toMatchSnapshot();
  });
});
