
export function delay(time = 2000): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time));
}

export async function readData(): Promise<string> {
    await delay(2000);
    return "Data read";
}
