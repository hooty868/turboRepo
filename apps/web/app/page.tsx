import { Button } from '@repo/ui/button';
import { formatDateTime } from '@repo/utils/time';

export default function Home() {
    return (
        <div>
            <main>
                <h1 className="text-2xl font-bold">web</h1>
                <Button>Open alert</Button>
                <button className="bg-red-400">test-button</button>
                <p>{formatDateTime(Date.now(), 'YYYY-MM-DD HH:mm:ss')}</p>
            </main>
        </div>
    );
}
