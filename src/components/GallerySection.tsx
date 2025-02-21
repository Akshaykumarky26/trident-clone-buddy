
import { ImageSlideshow } from "./ui/image-slideshow"

const galleryImages = [
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
]

const GallerySection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Gallery</h2>
          <p className="text-muted-foreground">Experience our hotel through images</p>
        </div>
        <div className="aspect-[16/9] rounded-lg overflow-hidden">
          <ImageSlideshow
            images={galleryImages}
            title="Hotel Gallery"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default GallerySection
