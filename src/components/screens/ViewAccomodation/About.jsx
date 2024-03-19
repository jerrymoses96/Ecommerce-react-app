
const About = ({data}) => {
    console.log(data);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">About this home</h1>
      <p className="font-light">Welcome to Brightwoods Cabin, your idyllic retreat nestled in the heart of Bridlepath, Ontario! Our cozy cabin, surrounded by the tranquility of nature's embrace, is designed to provide the ultimate relaxing getaway.</p>
      <p className="font-light"><small className="font-medium text-lg">Living Space:</small>{data.living_space_description}</p>
      <p className="font-light"><small className="font-medium text-lg">Bedrooms:</small>{data.bedrooms_description}</p>
    </div>
  )
}

export default About