import ImageShow from "./ImageShow";
import 'bootstrap/dist/css/bootstrap.min.css';

function ImageList({images}){

 const renderimages = images.map((image) =>{
 return <ImageShow key={image.id} image={image} />;

 });
 return <div className="container">
  <div className="row">
    {renderimages.map(image => (
      <div className="col-sm-6 col-md-4 col-lg-3" key={image.key}>
        <div className="img-thumbnail">{image}</div>
      </div>
    ))}
  </div>
</div>
}

  export default ImageList;