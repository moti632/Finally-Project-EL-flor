import PageHeader from "../common/pageHeader";

const About = () => {
  return (
    <div className="container">
      <PageHeader
        title="Elinor El flor"
        subTitle="Flowers don't speak, they are visible - Let your dream"
      />

      <article className="Elinor">
        <div className="art1 imgabout">
          <h2 className="titel1">Elinor Karni</h2>
          <img
            src="/images/Wedding/d69824ba-d40d-4bce-86c7-286f70dc6ac0.jpg"
            alt="card"
          />
          <p>
            Hi, I'm Elinor My passion for flowers and nature has accompanied me
            since I can remember myself as a child traveling with Dad to Grandma
            in a small seat in the south but with spaces and blooms non-stop. I
            would run and wander barefoot in the fields staring at special
            varieties of flowers growing on the sides of the road, coming back
            with flower arrangements to see Mom's wide smile and even then I
            knew that flowers, design and nature are a part of me!
          </p>
        </div>
      </article>

      <main className="main1">
        <div className="box box2 imgabout">
          <h2 className="titel1">why US?</h2>
          <img src="/images/Bridal/IMG_3736.PNG" alt="card" />
          <p>
            With us you can come to experience emphasizing things that only you
            love, to experience with us your event, your passion, everything you
            were sick of, so let's experience your passion together and create
            an amazing thing together.
          </p>
        </div>
        <div className="box box1 imgabout">
          <h2 className="titel1">Things You D'idnt Know...</h2>
          <img src="/images/View/IMG_9762.PNG" alt="card" />
          <p>
            In my adult life, my mother has been an event producer, for over 20
            years and I accompany her at every design point. The connection we
            built is magical when one complements the other and together we
            create for you an experience where you both dream and fall in love
            with your creative process.
          </p>
        </div>
        <div className="box box3 imgabout">
          <h2 className="titel1">Our Story</h2>
          <img src="/images/Bridal/IMG_3730.PNG" alt="card" />
          <p>
            We are here to make your dream come true !! MY mom comes with her
            amazing skills and abilities in producing an event where she lets
            you calm down confident and close that everything will knock and
            that there is someone who will take care of even the smallest
            details. And I, who come with the touch of ideas and solutions for
            everything, the spatial vision of the event venue and the connection
            to your imagination, direct you to choose the colors and adjust the
            right tools that will set the tone and take who you are out.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
