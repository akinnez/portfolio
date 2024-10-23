import { Component, input, OnInit } from '@angular/core';

interface IProps {
    statusProp: string;
}
interface IStatusKey {
    bgColor: string;
    status: string;
}

@Component({
    selector: 'Status',
    standalone: true,
    template: `
        <p
            class="mb-0 w-fit rounded px-2.5 py-0.5 text-xs text-center font-bold capitalize {{
                bgColor
            }} text-white"
        >
            {{ status }}
        </p>
    `,
})
export class StatusComponent implements OnInit {
    bgColor!: string;
    status!: string;

    statusObj: { [key: string]: IStatusKey } = {
        html: {
            bgColor: 'bg-neutral-html',
            status: 'html',
        },
        css: {
            bgColor: 'bg-blue-500',
            status: 'css',
        },
        bs: {
            bgColor: 'bg-violet-600',
            status: 'bootstrap',
        },
        twc: {
            bgColor: 'bg-green-900/70',
            status: 'tailwindcss',
        },
        js: {
            bgColor: 'bg-yellow-600',
            status: 'javascript',
        },
        ts: {
            bgColor: 'bg-blue-900/70',
            status: 'typescript',
        },
        ang: {
            bgColor: 'bg-red-800',
            status: 'angular',
        },
        ana: {
            bgColor: 'bg-red-600/50',
            status: 'analogjs',
        },
        react: {
            bgColor: 'bg-blue-500/50',
            status: 'reactjs',
        },
        next: {
            bgColor: 'bg-black',
            status: 'nextjs',
        },
        rechart: {
            bgColor: 'bg-red-900/50',
            status: 'rechart',
        },
        chart: {
            bgColor: 'bg-neutral-twc',
            status: 'chartjs',
        },
        axios: {
            bgColor: 'bg-blue-700',
            status: 'axios',
        },
        cs: {
            bgColor: 'bg-neutral-c',
            status: 'C#',
        },
        shad: {
            bgColor: 'bg-violet-700',
            status: 'Shadcn',
        },
        sql: {
            bgColor: 'bg-blue-300',
            status: 'SQL Server',
        },
    };

    statusProps = input<string>('');

    ngOnInit() {
        const { bgColor, status } = this.statusObj[this.statusProps()];
        this.bgColor = bgColor;
        this.status = status;
    }
}
