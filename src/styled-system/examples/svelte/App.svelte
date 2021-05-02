<script>
  import { css } from 'emotion'
  import system from '@styled-system/css'
  import theme from './theme.js'

  const styles = {
    root: css(system({
      fontFamily: 'body',
      fontSize:  [ 2, 3 ],
      color: 'primary',
      padding: 3,
    })(theme))
  }
</script>

<style>
  :global(body) {
    margin: 0
  }
</style>

<main class={styles.root}>
	<h1>Hello Svelte</h1>
	<h2>This example uses Styled System to pull styles from a global theme</h2>
</main>
