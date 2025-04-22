import type { NormalizeOAS, OASModel } from 'fets'
import type oas from '../openapi'

// infer Course type from OpenAPI schema
type Course = OASModel<NormalizeOAS<typeof oas>, 'Course'>
