import AllPhotos from "@/components/AllPhotos";
import Banner from "@/components/Banner";
import TopGenarated from "@/components/TopGenarated";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopGenarated></TopGenarated>
      <AllPhotos></AllPhotos>
   </div>
  );
}
