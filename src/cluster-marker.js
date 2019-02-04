import React from 'react'
import { css, cx } from 'emotion'

const ClusterMarker = props => {
	const { point_count, getZoom, cluster_id, lat, lng, updateMap } = props

	const size =
		point_count > 30 ? `large` : point_count > 20 ? `medium` : `small`

	return (
		<div
			className={cx(styles.cluster, styles[size])}
			onClick={() => {
				updateMap({
					zoom: getZoom(cluster_id),
					center: { lat, lng }
				})
			}}
		>
			<div className={styles.pointCount}>{point_count}</div>
		</div>
	)
}
export default props => ClusterMarker(props)

const styles = {
	cluster: css`
		cursor: pointer;
		border-radius: 50%;
	`,
	pointCount: css`
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		text-align: center;
		font-weight: 600;
	`,
	large: css`
		background: orange;
		border: 2px solid black;
		color: black;
		height: 45px;
		width: 45px;
	`,
	medium: css`
		background: orange;
		border: 2px solid white;
		color: white;
		height: 40px;
		width: 40px;
	`,
	small: css`
		background: black;
		border: 2px solid white;
		color: white;
		height: 35px;
		width: 35px;
	`
}
