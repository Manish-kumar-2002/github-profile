
const page = async (props) => {
    console.log(await props.params);
    console.log(await props.searchParams);

    const pagesId = await props.params
    
  return (
    <div>page {pagesId?.slugPages}</div>
  )
}

export default page