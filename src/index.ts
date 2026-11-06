export function headingId(heading: string): string {
  if (typeof heading !== 'string') throw new TypeError('Heading must be text');
  if (heading.length > 10000) throw new RangeError('Heading too long');
  const plain = heading
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_~`]/g, '')
    .trim()
    .toLocaleLowerCase('en');
  return plain
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/[\s-]+/g, '-');
}
