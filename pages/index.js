import { Layout } from "@components/Layout";
import SEO from "@components/SEO/SEO";
import { Dashboard } from '@sections/Dashboard/Dashboard';


export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Andrej Portfolio"
                description="Discover Andrej portfolio, Next and Tailwind project for very simple Portfolio."
                keywords="Next and Tailwind"
            />
            <Dashboard />
        </Layout>
    );
}
