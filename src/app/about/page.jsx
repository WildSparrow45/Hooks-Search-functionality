import React from "react";
import PropTypes from "prop-types";
import favIcon from "@/Images/Favicon/github.png";

export const metadata = {
  title: "About Us",
  icon: [{ rel: "icon", url: favIcon.src }],
};

function About() {
  const Aboutinner = ({ name, num }) => {
    return (
      <p>
        {name}
        {num}
      </p>
    );
  };
  Aboutinner.propTypes = {
    name: PropTypes.string,
    num: PropTypes.number,
  };

  return (
    <div>
      <Aboutinner name="Arham khan" num={44} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        natus ex, excepturi, sit temporibus adipisci nesciunt soluta dolor est
        repellat, odio odit nemo doloremque. Molestiae vel esse hic quibusdam
        deserunt.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        aliquid fuga officia, facilis maxime quam sunt voluptatum quidem
        distinctio beatae itaque exercitationem quod! Nisi placeat veritatis
        perspiciatis consectetur velit at itaque corporis quisquam quaerat id
        doloremque, in reiciendis rem, ad eius voluptatum saepe ut deleniti sint
        eligendi nobis? Fuga consectetur eaque tenetur esse ad soluta maxime sed
        numquam, expedita mollitia vitae minima nam, dicta sit corrupti,
        incidunt inventore? Facilis enim dolorum labore laudantium facere at vel
        amet quod totam asperiores, dolorem obcaecati inventore quasi natus
        fugit? Labore commodi id error excepturi perspiciatis fuga aliquam non
        veniam quod, officia expedita voluptates adipisci at praesentium odit.
        Dolore quisquam adipisci doloribus, accusamus ea sunt enim illum sequi!
        Rerum, magni. Quia iusto aperiam nisi doloribus numquam molestias fugit
        possimus nostrum? Eum, assumenda.
      </p>
    </div>
  );
}

export default About;
