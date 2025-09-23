export const getErrorMessageBuPropertyName = (
  errorObject: Record<string, any>,
  propertyPath: string
) => {
  const properties = propertyPath.split(".");
  let value: any = errorObject;

  for (const prop of properties) {
    if (value[prop]) {
      value = value[prop] as Record<string, any>;
    } else {
      return undefined;
    }
  }

  return (value as { message?: string })?.message;
};
