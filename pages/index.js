import {
  HomeApplication,
  HomeCollaboration,
  HomeHero,
  HomeCollection,
  HomeFAQ,
  HomeStory,
  // HomeRoadMap,
  HomeTeam,
  HomeFooter,
} from 'features/Home'
import HomeMint from 'features/Home/HomeMint'
import { HomeLayout } from 'layouts'
import { useRef } from 'react'
import { showcases, teams, questions } from 'utils/constants'

function Home() {
  const mintModal = useRef(null)

  return (
    <div className="Home__bg">
      <HomeLayout title="Bubbly NFT">
        <main>
          <HomeHero mintModalRef={mintModal} />
          <HomeMint ref={mintModal} />
          <HomeStory />
          <HomeCollection showcases={showcases} />
          <HomeApplication />
          {/* <HomeRoadMap /> */}
          <HomeFAQ questions={questions} />
          <HomeTeam teams={teams} />
          <HomeCollaboration />
          <HomeFooter mintModalRef={mintModal} />
        </main>
      </HomeLayout>
    </div>
  )
}

export default Home
