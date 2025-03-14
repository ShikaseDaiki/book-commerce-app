import { BookType } from "@/types/types";
import { MicroCMSListResponse, createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllBooks = async () => {
  const allBooks: MicroCMSListResponse<BookType> = await client.getList({
    endpoint: "bookcommerce",
  });
  return allBooks;
};
