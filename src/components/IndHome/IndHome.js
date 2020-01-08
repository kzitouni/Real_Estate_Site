import React, { useContext, useState } from "react";
import { FaRegImage } from "react-icons/fa";
import IndHomeText from "./IndHomeText";
import { Context } from "../../Functions/SearchFetch";
import RealEstateProfile from "./RealEstateProfile";
import { Gallery, GalleryImage } from "react-gesture-gallery";
const IndHome = () => {
  const { house } = useContext(Context);
  const [index, setIndex] = useState(0);
  let imageLength = house.images.length
  let image1 = house.images[0]
  let image2 = imageLength  > 1
        ? house.images[1]
        : null
  let image3 = imageLength > 2
        ? house.images[2]
        : null;
  return (
    <div className="House_Info_Cont">
      <div className="IndHome_Images_Cont">
        <div
          className="IndHome_SmallImage"
          style={{
            gridArea: "b",
            backgroundImage:
              image2 == null
                ? `url("https://www.battlegroundindy.com/wp-content/uploads/2019/01/no-image-770x466.jpg")`
                : `url(${image2})`
          }}
        ></div>
        <div
          className="IndHome_SmallImage"
          style={{
            gridArea: "d",
            backgroundImage:
              image3 == null
                ? `url("https://www.battlegroundindy.com/wp-content/uploads/2019/01/no-image-770x466.jpg")`
                : `url(${image3})`
          }}
        >
          <div className="IndHome_SmallImage_Dark">
            <p className="IndHome_SmallImage_Dark_Icon">
              <FaRegImage style={{ marginRight: ".3rem" }} />{" "}
              {imageLength > 5 ? "5" : imageLength}
            </p>
          </div>
        </div>

        {house.image != null ? (
          <div
            className="IndHome_LargeImage"
            style={{
              background: `url(${image1}) no-repeat center center white`
            }}
          ></div>
        ) : imageLength == 1 ? (
          <div
            className="IndHome_LargeImage"
            style={{
              background: `url(${image1}) no-repeat center center white`
            }}
          ></div>
        ) : (
          <div className="IndHome_LargeImage">
            <Gallery
              index={index}
              onRequestChange={i => {
                setIndex(i);
              }}
            >
              {house != undefined
                ? house.images.map(img => (
                    <GalleryImage
                      objectFit="contain"
                      key={img}
                      src={img}
                    />
                  ))
                : null}
            </Gallery>
          </div>
        )}
      </div>

      <div style={{ display: "flex" }}>
        <IndHomeText />
        <RealEstateProfile />
      </div>
    </div>
  );
};

export default IndHome;
