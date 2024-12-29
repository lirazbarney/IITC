import { useContext } from "react";
import Business from "../../types/businessType";
import { UserContext } from "../providers/user-context";
import Review from "./Review";
import { addSub } from "../services/subscriptionService";

interface BusinessCardProps {
  business: Business;
  handleDelete: (id: string) => Promise<void>;
}

export default function BusinessCard({
  business,
  handleDelete,
}: BusinessCardProps) {
  const userContext = useContext(UserContext);
  let isMyBusiness = false;
  let isSub: boolean | undefined;
  let userID: string = "";

  if (userContext.user) {
    userID = userContext.user.id;
    if (userID === business.owner) {
      isMyBusiness = true;
    } else if (business.subscribers.includes(userID)) {
      isSub = true;
    } else {
      isSub = false;
    }
  }

  return (
    <>
      <div className="border border-black m-4 p-2">
        <h1 className="text-xl font-bold">{business.name}</h1>
        <span className="text-sm text-gray-500">{business.category}</span>
        <p>{business.description}</p>
        <div className="overflow-x-auto">
          {business.reviews.map((currentReview) => {
            return <Review key={currentReview.id} />;
          })}
        </div>
        {isMyBusiness && (
          <div className="flex gap-1">
            <button
              className="border border-black"
              onClick={() => handleDelete(business._id)}
            >
              delete
            </button>
            <button className="border border-black">update</button>
          </div>
        )}
        {isSub && (
          <div className="flex gap-1">
            <button className="border border-black">remove subscription</button>
            <button className="border border-black">add review</button>
          </div>
        )}
        {isSub === false && (
          <div className="flex gap-1">
            <button
              className="border border-black"
              onClick={() => addSub(business._id, userID)}
            >
              add subscription
            </button>
            <button className="border border-black">add review</button>
          </div>
        )}
      </div>
    </>
  );
}
