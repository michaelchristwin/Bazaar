interface ProdProps {
  img: string;
  name: string;
}
import Image from "next/image";
import React from "react";
function ProductSm({ img, name }: ProdProps) {
  return (
    <div className="prodsm shadow rounded pt-1">
      <div className="im-div">
        <Image
          src={img}
          alt="phone"
          width={60}
          height={100}
          className="py-2 prod-img mx-auto d-block"
        />
      </div>
      <p className="text-center">Phones</p>
    </div>
  );
}

export default ProductSm;
