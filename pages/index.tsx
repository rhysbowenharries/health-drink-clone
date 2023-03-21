import Head from "next/head";
import Header from "@/components/Header";
import Juce from "@/components/Juce";
import Blurb from "@/components/Blurb";
import Properties from "@/components/Properties";
import { Nutrition } from "@/components/Nutrition";
import { ButtonHack } from "@/components/ButtonHack";

export default function Home() {
  return (
    <div className="min-w-full">
      <Head>
        <title>CPJ Cold Pressed Juice</title>
        <meta name="description" content="CPJ Cold Pressed Juice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <Header />
        </div>
        <section id="juce">
          <Juce />
        </section>
        <section id="blurb">
          <Blurb />
        </section>
        <section id="properties">
          <Properties />
        </section>
        <section id="nutrition">
          <Nutrition />
        </section>
      </div>
    </div>
  );
}
