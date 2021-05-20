import TagPickerInput from "../components/TagPickerInput/TagPickerInput";

export default function Test() {
  
  const advancedOptions = {
    1: { label: "Blue", selected: false },
    2: { label: "Black", selected: false },
    3: { label: "Red", selected: false },
    4: { label: "White", selected: false },
    5: { label: "Green", selected: false },
  }

  return (
    <div className="w-full h-full">
      <div className="bg-blue-600 container mx-auto">
        <TagPickerInput content={advancedOptions} placeholder='Select' title="A" description="b" />
      </div>

    </div>
  );
}
