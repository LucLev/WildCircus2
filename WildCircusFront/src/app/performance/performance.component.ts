import { Component, OnInit } from '@angular/core';
import { Perf } from '../performance';
import { User } from '../user';
import { PerfService } from '../services/perf.service';

@Component({
	selector: 'app-performance',
	templateUrl: './performance.component.html',
	styleUrls: [ './performance.component.css' ]
})
export class PerformanceComponent implements OnInit {
	displayList: boolean;
	displayShowMore: boolean;
	allPerf: Perf[];
	displayedPerf: Perf;
	perfDisplayPosition: number;
	user: User;

	displayPos(x: number): boolean {
		if (x >= this.perfDisplayPosition) {
			return true;
		} else {
			return false;
		}
	}
	showMore(perf?: Perf) {
		if (this.displayShowMore) {
            this.displayShowMore = false;
            this.displayList = true
		} else {
            this.displayList = false;
			this.displayedPerf = perf;
			this.displayShowMore = true;
        }
	}

	pushPerf(x: number) {
		for (let i = 0; i < x; i++) {
			this.allPerf.push({
				id: 0,
				user: this.user,
				icon: 'https://via.placeholder.com/450?text=Icon',
				name: 'Performance',
				description: 'An unusual performance executed by a really fast man running at incredible speed.',
				latitude: 50,
				longitude: 1,
				date: 20012020
			});
		}
	}
	constructor(perfService:PerfService) {
		this.allPerf = [];
		this.displayList = true;
        this.perfDisplayPosition = 0;
        //perfService.getAllPerf().subscribe(
        //    (perf: Perf[]) => {
        //        this.allPerf = perf;
        //      }
        //)
        
    }


	ngOnInit() {
        this.pushPerf(20)
	}
}
