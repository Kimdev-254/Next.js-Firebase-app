import Layout from "../components/_layout"
import Form from "../components/Form"
import Link from "next/link"

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="max-w-4xl mx-auto mt-8">
          <Form />
        </div>
      </div>
    </Layout>
  )
}

export default Home
