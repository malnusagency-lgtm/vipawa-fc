import { organization } from '@/data/clubData';
import ClubContent from '@/components/ClubContent';

export const metadata = {
    title: "The Club | Vipawa Ladies FC",
    description: "Meet the leadership, coaching staff, and the 2026 First Team squad of Vipawa Ladies FC.",
};

export default function ClubPage() {
    return <ClubContent organization={organization} />;
}
