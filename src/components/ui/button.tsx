import { Button } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

function Example() {
  return (
    <Button as={Fragment}>
      {({ hover, active }) => (
        <button
          className={clsx(
            "rounded py-2 px-4 text-sm border-solid transition-colors",
            !hover && !active && "bg-blue-500 text-white",
            hover && !active && "bg-blue-600 text-white",
            active && "bg-blue-700 text-white"
          )}
        >
          Save changes
        </button>
      )}
    </Button>
  );
}

export default Example;
