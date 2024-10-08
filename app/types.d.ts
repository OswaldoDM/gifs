type FormEvent = FormEvent<HTMLFormElement>;
type ChangeEvent = ChangeEvent<HTMLInputElement>;

interface GiphyApiResponse {
  data: Array<{
    id: string;
    title: string;
    images: {
      fixed_width_small: {
        url: string;
      };
    };
  }>;
}

