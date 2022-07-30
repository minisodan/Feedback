import Card from "../Components/Shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          A small React app to leave Feedback on a product or service you find
          enjoyable or not enjoyable! i hope you enjoyed my small project!
        </p>

        <p>
          <a href="/">Back to home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
