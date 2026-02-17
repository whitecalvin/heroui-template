"use client";

import { Accordion, AccordionItem, Autocomplete, AutocompleteItem, Button } from "@heroui/react";

export const HeroUIAccordion = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="w-full">
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export const HeroUIButton = () => {
  return (
    <div className="w-full">
      <Button color="primary">Button</Button>
    </div>
  );
}

// import {Autocomplete, AutocompleteItem} from "@heroui/react";

export const animals = [
  { label: "Cat", key: "cat", description: "The second most popular pet in the world" },
  { label: "Dog", key: "dog", description: "The most popular pet in the world" },
  { label: "Elephant", key: "elephant", description: "The largest land animal" },
  { label: "Lion", key: "lion", description: "The king of the jungle" },
  { label: "Tiger", key: "tiger", description: "The largest cat species" },
  { label: "Giraffe", key: "giraffe", description: "The tallest land animal" },
  {
    label: "Dolphin",
    key: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  { label: "Penguin", key: "penguin", description: "A group of aquatic flightless birds" },
  { label: "Zebra", key: "zebra", description: "A several species of African equids" },
  {
    label: "Shark",
    key: "shark",
    description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    key: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  { label: "Otter", key: "otter", description: "A carnivorous mammal in the subfamily Lutrinae" },
  { label: "Crocodile", key: "crocodile", description: "A large semiaquatic reptile" },
];

export const HeroUIAutocomplete = () => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete className="max-w-xs" label="Select an animal">
        {animals.map((animal) => (
          <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        className="max-w-xs"
        defaultItems={animals}
        label="Favorite Animal"
        placeholder="Search an animal"
      >
        {(item) => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
      </Autocomplete>
    </div>
  );
}
