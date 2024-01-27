import { Content } from "@prismicio/client";
import { SliceComponentProps} from "@prismicio/react";
import {PrismicNextImage} from "@prismicio/next"

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <>{slice.primary.title}</>
     <PrismicNextImage field={slice.primary.image} />
    </section>
  );
};

export default Image;
