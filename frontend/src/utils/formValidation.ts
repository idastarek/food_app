export function hasEmptyFields<T extends object>(
    object: T,
    fieldsToCheck: (keyof T)[]
): boolean {
    return fieldsToCheck.some((field) => {
        const value = object[field];
        return typeof value === "string" ? value.trim() === "" : value === undefined || value === null; 
    });
}


