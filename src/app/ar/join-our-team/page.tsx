import type { Metadata } from "next";
import ClientJoinOurTeamPage from "./page.client";

export const metadata: Metadata = {
  title: "انضموا إلى فريق بنون – الابتكار، التعليم الطبي، الأبحاث ",
  description: "انضموا إلى فريق بنون الطبي. فرص عمل في مجالات الإخصاب والابتكار الطبي والتعليم والأبحاث في الرياض وجدة والأحساء.",
};

export default function JoinOurTeamPage() {
  return <ClientJoinOurTeamPage />;
}
