export function downloadVCard(name: string, phone: string, org: string) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
ORG:${org}
END:VCARD`;
  
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${name.replace(/\s+/g, '-')}.vcf`;
  link.click();
  URL.revokeObjectURL(url);
}
