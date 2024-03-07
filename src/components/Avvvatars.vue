<script lang="ts" setup>
import type { StyleValue } from 'vue'
import { computed, reactive, ref } from 'vue'
import randiman from '../lib/random'
import { BACKGROUND_COLORS, SHAPE_COLORS, TEXT_COLORS } from '../lib/colors'
import Shapes from './Shapes.vue'

type Variant = 'character' | 'shape'

interface Props {
  displayValue?: string
  // this should be unique to user, it can be email, user id, or full name
  value: string
  size?: number
  shadow?: boolean
  variant?: Variant

  // toggle border
  border?: boolean
  borderSize?: number
  borderColor?: string
  radius?: number
}

const props = withDefaults(defineProps<Props>(), {
  displayValue: '',
  value: '',
  size: 32,
  variant: 'character',
  shadow: false,
  border: false,
  borderSize: 2,
  borderColor: '#fff',
  radius: 0,
})

const name = computed(() =>
  String(props.displayValue || props.value).substring(0, 2),
)

const key = computed(() => randiman({ value: props.value, min: 0, max: 19 }))

const shapeKey = computed(() =>
  randiman({ value: props.value, min: 1, max: 60 }),
)

const borderComputed = computed(() => {
  if (!props.border)
    return ''
  return {
    border: `${props.borderSize}px solid ${props.borderColor}`,
  }
})

const shadowComputed = computed(() => {
  if (!props.shadow)
    return ''
  return {
    boxShadow: '0px 3px 8px rgba(18, 18, 18, 0.04), 0px 1px 1px rgba(18, 18, 18, 0.02)',
  }
})

const fontSize = `${Math.round((props.size / 100) * 37)}px`

const variant = ref(props.variant)

const avvvatarsStyle = reactive({
  width: `${props.size}px`,
  height: `${props.size}px`,
  borderRadius: `${props.radius || props.size}px`,
  backgroundColor: `#${BACKGROUND_COLORS[key.value]}`,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
}) as StyleValue

const avvvatarsShapeStyle = reactive({
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  color: `#${SHAPE_COLORS[key.value] || 'currentColor'}`,
}) as StyleValue

const avvvatarsText = reactive({
  margin: 0,
  padding: 0,
  textAlign: 'center',
  boxSizing: 'border-box',
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif',
  fontSize,
  color: `#${TEXT_COLORS[key.value]}`,
  lineHeight: 0,
  textTransform: 'uppercase',
  fontWeight: 500,
}) as StyleValue
</script>

<template>
  <div :style="[borderComputed, shadowComputed, avvvatarsStyle]">
    <template v-if="variant === 'character'">
      <p :style="avvvatarsText">
        {{ name }}
      </p>
    </template>
    <template v-else>
      <span :style="avvvatarsShapeStyle">
        <Shapes :name="`${shapeKey}`" :size="Math.round((size / 100) * 50)" />
      </span>
    </template>
  </div>
</template>
