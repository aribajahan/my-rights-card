function escapeVCardField(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

export function downloadVCard(name: string, phone: string, org: string) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${escapeVCardField(name)}
TEL:${escapeVCardField(phone)}
ORG:${escapeVCardField(org)}
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${name.replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}.vcf`;
  link.click();
  URL.revokeObjectURL(url);
}
