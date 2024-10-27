import photosJSON from "./assets/Photos.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//http://localhost:8080/api/readFileNamesRoutes
//https://dev.to/franklin030601/lazy-loading-in-images-with-react-js-4enm
function App() {
  const folderName = "haldi ceremony selected";
  const Photos = photosJSON[folderName].slice(0, 5).map((photo, i) => {
    return (
      <LazyLoadImage
        key={`${i}-${photo}`}
        src={require(`./assets/marriagePhotos/${folderName}/${photo}`)}
        alt={`Image Alt-${photo}`}
        className="img-lazy"
        width={700}
        height={500}
        effect="blur" // opacity | black-and-white
      />
    );
    // {
    //   src: require(`./assets/marriagePhotos/Other/${photo}`),
    // };
  });
  return <div>{Photos}</div>;
}

export default App;
