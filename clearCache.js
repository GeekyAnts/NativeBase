const spawnSync = require('child_process').spawnSync;

spawnSync('yarn', [
            'test',
            '--no-cache'], {stdio: 'inherit'});

spawnSync('yarn', [
            'test',
            '--no-watchman'], {stdio: 'inherit'});


