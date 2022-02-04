export type ClassNamesStructure = Record<string, boolean>;

export const getClassName = (classNames: ClassNamesStructure): string => {
  // TODO: Check the object

  if (!classNames) {
    console.error(
      `getCLassName: Expected configuration object but got ${classNames}`
    );

    return "";
  }

  return Object.keys(classNames)
    .filter((className) => classNames[className])
    .join(" ");
};
