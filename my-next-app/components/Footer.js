import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h2 className="font-bold">ABOUT</h2>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h2 className="font-bold">COMMUNITY</h2>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to Full Stack hero</p>
        <p>Hundreds of students</p>
        <p>Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h2 className="font-bold">Host</h2>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>This is not a real site</p>
        <p>Papafam</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h2 className="font-bold">SUPPORT</h2>
        <p>Help Center</p>
        <p>Trust and safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter eggs</p>
        <p>For the win</p>
      </div>

      <div></div>
    </div>
  );
}

export default Footer;
