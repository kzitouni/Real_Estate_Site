import React, { useContext, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { FaRegImage } from "react-icons/fa";
import IndHomeText from "./IndHomeText";
import { Context } from "../Functions/SearchFetch";
import RealEstateProfile from "./RealEstateProfile";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
const IndHome = () => {
  const { house } = useContext(Context);
  const [index, setIndex] = useState(0);
  let imageLength =
    house.result.images != undefined ? house.result.images.count._text : 1;
  let image1 =
    house.result.images != undefined
      ? imageLength > 1
        ? house.result.images.image.url[0]._text
        : house.result.images.image.url._text
      : house.image;
  let image2 =
    house.result.images != undefined
      ? imageLength > 1
        ? house.result.images.image.url[1]._text
        : null
      : null;
  let image3 =
    house.result.images != undefined
      ? imageLength > 2
        ? house.result.images.image.url[2]._text
        : null
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
                ? house.result.images.image.url.map(img => (
                    <GalleryImage
                      objectFit="contain"
                      key={img._text}
                      src={img._text}
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
