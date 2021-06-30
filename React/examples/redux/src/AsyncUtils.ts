export function delay(duration = 2000): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), duration);
    });
}
