import { CronJob } from 'cron';
import jobs from "./job/index.js"

export function executeCronJob() {
	for (const task of jobs) {
		new CronJob(
			task.time, 
			function () {
				task.job
			}, 
			null, 
			true,
			'America/Los_Angeles'
		);
	}
}

