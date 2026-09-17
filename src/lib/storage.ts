const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;

export function storageUrl(bucket: string, path: string) {
  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${path
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
}
