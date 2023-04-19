export type ClassNamesStructure = Record<string, boolean>;

const classnames = (classNames: ClassNamesStructure): string => {
  if (!classNames || classNames.constructor.name !== 'Object') {
    console.error(
      `classnames: Expected configuration object but got ${classNames}`
    );

    return '';
  }

  return Object.keys(classNames)
    .filter((className) => classNames[className])
    .join(' ');
};

export default classnames;
