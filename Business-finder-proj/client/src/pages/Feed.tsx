import { useMutation, useQueryClient } from "@tanstack/react-query";

import useBusinesses from "../hooks/use-businesses";

import BusinessCard from "../components/BusinessCard";
import Business from "../../types/businessType";
import { deleteBusiness } from "../services/businessService";

export default function Feed() {
  const { data, error, isLoading, isFetching } = useBusinesses();

  const queryClient = useQueryClient();

  const businesses: Business[] = [];
  if (data) {
    data.forEach((currentBusiness) => {
      businesses.push({
        _id: currentBusiness._id,
        category: currentBusiness.category,
        description: currentBusiness.description,
        name: currentBusiness.name,
        owner: currentBusiness.owner,
        reviews: currentBusiness.reviews,
        subscribers: currentBusiness.subscribers,
      });
    });
  }

  const deleteBusinessMutation = useMutation({
    mutationFn: deleteBusiness,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["businesses"] });
      const prevBusinesses = queryClient.getQueryData(["businesses"]);
      queryClient.setQueryData(["businesses"], (businesses: Business[]) => {
        return businesses.filter(
          (currentBusiness) => currentBusiness._id !== id
        );
      });
      return prevBusinesses;
    },
  });

  async function handleDelete(id: string) {
    await deleteBusinessMutation.mutateAsync(id);
  }

  if (isLoading) {
    return "loading";
  }
  if (error) {
    return error.message;
  }

  if (!businesses) {
    return "an error has accrued";
  }

  if (businesses.length === 0) {
    return "there are no businesses yet";
  }

  return (
    <>
      {isFetching && <p>getting fresh data...</p>}

      {businesses.map((currentBusiness) => {
        return (
          <BusinessCard
            key={currentBusiness._id}
            business={currentBusiness}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
}
