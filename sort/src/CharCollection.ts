export class CharCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const char = this.data.split('');
    const leftChar = char[leftIndex];
    char[leftIndex] = char[rightIndex];
    char[rightIndex] = leftChar; 
    this.data = char.join('');
  }
}
