import fs from 'fs';

export namespace calculateCharacterOccurence {
  export const withObject = (value: string) => {
    return value.split('').reduce((acc, char) => {
      acc[char] = (acc[char] ?? 0) + 1;
  
      return acc;
    }, {} as Record<string, number>);
  }

  export const withMap = (value: string) => {
    return value.split('').reduce((acc, char) => {
      acc.set(char, (acc.get(char) ?? 0) + 1)
  
      return acc;
    }, new Map<string, number>());
  }

  export const chunkedAsyncWithMap = (file: string) => {
    return new Promise<Map<string, number>>((resolve, reject) => {
      const map = new Map<string, number>();

      const readStream = fs.createReadStream(file, { highWaterMark: 1024, encoding: 'utf-8' });

      readStream.on('data', (chunk: string) => {
        return chunk.split('').forEach((char) => {
          map.set(char, (map.get(char) ?? 0) + 1)
        });
      });

      readStream.on('end', () => {
        resolve(map);
      });

      readStream.on('error', reject);
    });
  }
}