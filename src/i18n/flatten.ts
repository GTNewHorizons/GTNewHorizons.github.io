export function flatten(obj: Record<string, unknown>, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const dotKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      result[dotKey] = value;
    } else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        Object.assign(result, flatten(value[i] as Record<string, unknown>, `${dotKey}.${i}`));
      }
    } else if (typeof value === "object" && value !== null) {
      Object.assign(result, flatten(value as Record<string, unknown>, dotKey));
    }
  }
  return result;
}
