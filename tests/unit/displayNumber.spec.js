import { shallowMount } from "@vue/test-utils";
import DisplayNumber from "@/components/DisplayNumber.vue";

describe("DisplayNumber.vue", () => {
  let component;

  beforeEach(() => {
    component = shallowMount(DisplayNumber, {
      propsData: {
        title: "Test Title for component",
        number: 5,
        id: "MyId"
      }
    });
  });

  it("has the expected html structure", () => {
    expect(component.element).toMatchSnapshot();
  });
});
