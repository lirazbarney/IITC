import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdatingBusiness() {
  const { id } = useParams();
  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.target as HTMLFormElement);
    const formResult = Object.fromEntries(data.entries());
    const name = formResult.name as string;
    const description = formResult.description as string;
    const category = formResult.category as string;
    const owner = "676ebda4c5aea0f6f9746875";
    try {
      const result = await axios.post(
        "http://localhost:3000/api/v1/businesses",
        { name, description, category, owner }
      );
      alert("business was successfully added");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        switch (err.response?.status) {
          case 400:
            alert("please make sure all fields were filled");
            break;
          default:
            console.log(err);
            alert(err.message);
            break;
        }
      } else {
        console.error("unexpected error accrued", err);
        alert(err);
      }
    }
  }

  return (
    <>
      <form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <label htmlFor="name">name: </label>
        <input className="border border-black" name="name" id="name" required />
        <br />
        <label htmlFor="description">description: </label>
        <input
          className="border border-black"
          name="description"
          id="description"
          required
        />
        <br />
        <label htmlFor="category">category: </label>
        <input
          className="border border-black"
          name="category"
          id="category"
          required
        />
        <br />
        <button className="border border-black">add!</button>
      </form>
    </>
  );
}
