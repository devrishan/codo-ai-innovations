import PageHeader from '@/components/ui/PageHeader';
import SectionTitle from '@/components/ui/SectionTitle';

const CareersPage = () => {
    return (
        <>
            <PageHeader title="Join the Resistance" breadcrumb="Careers" />
            <section className="section bg-slate-950 text-center">
                <div className="container">
                    <div className="glass-card p-12 max-w-4xl mx-auto rounded-3xl border border-purple-500/30">
                        <h2 className="text-3xl font-bold text-white mb-6">We are looking for anomalies.</h2>
                        <p className="text-slate-400 mb-8 text-lg">
                            If you dream in code and speak in algorithms, your place is here. We are building the future, one line of code at a time.
                        </p>
                        <button className="btn btn-primary">View Open Positions</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareersPage;
